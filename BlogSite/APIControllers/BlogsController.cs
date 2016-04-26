using BlogSite.Models;
using BlogSite.Services;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

namespace BlogSite.APIControllers
{
    [Route("api/Blogs")]
    public class BlogsController : Controller
    {
        private IBlogService _blogService;

        public BlogsController(IBlogService blogService)
        {
            _blogService = blogService;
        }

        // GET: api/Blogs
        [HttpGet]
        public JsonResult GetBlogs()
        {
            return new JsonResult(new {
                blogs = _blogService.Get()
            });
        }

        // GET: api/Blogs/5
        [HttpGet("{id}", Name = "GetBlog")]
        public IActionResult GetBlog([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Blog blog = _blogService.Get(id);

            if (blog == null)
            {
                return HttpNotFound();
            }

            return Ok(blog);
        }

        // PUT: api/Blogs/5
        [HttpPut("{id}")]
        public IActionResult PutBlog(int id, [FromBody] Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != blog.BlogID)
            {
                return HttpBadRequest();
            }

            try
            {
                _blogService.Update(blog);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(id))
                {
                    return HttpNotFound();
                }
                else
                {
                    throw;
                }
            }

            return new HttpStatusCodeResult(StatusCodes.Status204NoContent);
        }

        // POST: api/Blogs
        [HttpPost]
        public IActionResult PostBlog([FromBody] Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }
            
            try
            {
                _blogService.Add(blog);
            }
            catch (DbUpdateException)
            {
                if (BlogExists(blog.BlogID))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetBlog", new { id = blog.BlogID }, blog);
        }

        // DELETE: api/Blogs/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBlog(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Blog blog = _blogService.Get(id);
            if (blog == null)
            {
                return HttpNotFound();
            }

            _blogService.Delete(blog);

            return Ok(blog);
        }

        private bool BlogExists(int id)
        {
            return _blogService.BlogExists(id);
        }
    }
}