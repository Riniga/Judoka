using JudokaWeb.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace JudokaWeb.Controllers
{
    public class ListAllCompetitionsController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            using (JudokaDataModelContext db = new JudokaDataModelContext())
            {
                SortingPagingInfo info = new SortingPagingInfo();
                info.SortField = "Name";
                info.PageCount = Convert.ToInt32(Math.Ceiling((double)(db.Competitions.Count() / info.PageSize)));
                ViewBag.SortingPagingInfo = info;

                return View();
            }
        }
    }
}
