using System.Linq;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.Data.Entity;
using BlogSite.Models;
using BlogSite.Services;

namespace BlogSite.Controllers
{
    public class BlogsController : Controller
    {
        private ApplicationDbContext _context;
        private IBlogService _blogService;

        public BlogsController(
            ApplicationDbContext context,
            IBlogService blogService)
        {
            _context = context;
            _blogService = blogService;    
        }

        // GET: Blogs
        public IActionResult Index()
        {
            return View(_context.Blogs.ToList());
        }

        // GET: Blogs/Details/5
        public IActionResult Details(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }

            Blog blog = _context.Blogs.Single(m => m.BlogID == id);
            if (blog == null)
            {
                return HttpNotFound();
            }

            return View(blog);
        }

        // GET: Blogs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Blogs/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Blog blog)
        {
            if (ModelState.IsValid)
            {
                _context.Blogs.Add(blog);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(blog);
        }

        // GET: Blogs/Edit/5
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }

            Blog blog = _context.Blogs.Single(m => m.BlogID == id);
            if (blog == null)
            {
                return HttpNotFound();
            }
            return View(blog);
        }

        // POST: Blogs/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Blog blog)
        {
            if (ModelState.IsValid)
            {
                _context.Update(blog);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(blog);
        }

        // GET: Blogs/Delete/5
        [ActionName("Delete")]
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return HttpNotFound();
            }

            Blog blog = _context.Blogs.Single(m => m.BlogID == id);
            if (blog == null)
            {
                return HttpNotFound();
            }

            return View(blog);
        }

        // POST: Blogs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            Blog blog = _context.Blogs.Single(m => m.BlogID == id);
            _context.Blogs.Remove(blog);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
