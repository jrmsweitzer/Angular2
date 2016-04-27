using BlogSite.Models;
using System.Collections.Generic;

namespace BlogSite.Services
{
    public interface IBlogService
    {
        void Add(Blog blog);
        IEnumerable<Blog> Get();
        Blog Get(string title);
        Blog Get(int id);
        void Update(Blog blog);
        Blog Delete(Blog blog);
        bool BlogExists(int id);
    }
}
