using Day_Project.Data_Access_Layer;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day_Project.Areas.Manage.Controllers
{
    [Area("manage")]
    public class PortfolioController : Controller
    {
        private AppDbContext _context { get; }
        public PortfolioController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
