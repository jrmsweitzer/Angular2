using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlogSite.Models
{
    public class Blog
    {
        [ScaffoldColumn(false)]
        public int BlogID { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        public string ContentPreview { get; set; }
        public DateTime CreateDate { get; set; }

        [ScaffoldColumn(false)]
        public int ApplicationUserID { get; set; }
        public virtual ApplicationUser Creator { get; set; } 
    }
}
