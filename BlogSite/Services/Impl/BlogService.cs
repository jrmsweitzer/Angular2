using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogSite.Models;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

namespace BlogSite.Services.Impl
{
    public class BlogService : IBlogService
    {
        public BlogService(ApplicationDbContext context)
        {
            _context = context;
        }

        private ApplicationDbContext _context { get; set; }

        public void Add(Blog blog)
        {
            _context.Blogs.Add(blog);
            _context.SaveChanges();
        }

        public Blog Delete(Blog blog)
        {
            _context.Blogs.Remove(blog);
            _context.SaveChanges();
            return Get(blog.Title);
        }

        public IEnumerable<Blog> Get()
        {
            return _context.Blogs;
        }

        public Blog Get(string title)
        {
            return _context.Blogs.Single(b => b.Title.Equals(title));
        }

        public Blog Get(int id)
        {
            return _context.Blogs.Single(b => b.BlogID == id);
        }

        public void Update(Blog blog)
        {
            _context.Entry(blog).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public bool BlogExists(int id)
        {
            return Get().Count(b => b.BlogID == id) > 0;
        }
    }
}
