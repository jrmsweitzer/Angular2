using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogSite.Models
{
    public static class SampleData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            string admin = "Admin";
            var context = (serviceProvider.GetService(typeof(ApplicationDbContext))) as ApplicationDbContext;
            context.Database.Migrate();
            if (!context.Blogs.Any())
            {
                var roleAdmin = context.Roles.Add(
                    new IdentityRole
                    {
                        Name = admin
                    }).Entity;

                var userAdmin = context.Users.Add(
                    new ApplicationUser
                    {
                        UserName = admin
                    }).Entity;

                context.SaveChanges();

                context.UserRoles.Add(
                    new IdentityUserRole<string>
                    {
                        RoleId = context.Roles.FirstOrDefault(r => r.Name.Equals(admin)).Id,
                        UserId = context.Users.FirstOrDefault(u => u.UserName.Equals(admin)).Id
                    });

                context.Blogs.AddRange(
                    new Blog
                    {
                        Creator = context.Users.FirstOrDefault(u => u.UserName.Equals(admin)),
                        Title = "My first blog",
                        ContentPreview = "Not much to see here!",
                        Content = "Go Away"
                    },
                    new Blog
                    {
                        Creator = context.Users.FirstOrDefault(u => u.UserName.Equals(admin)),
                        Title = "My second blog",
                        ContentPreview = "Configuration is boring",
                        Content = "Hopefully this works today!"
                    });
                context.SaveChanges();
            }
        }
    }
}
