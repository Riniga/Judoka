using JudokaWeb.Models;
using System;
using System.Web.Mvc;
using System.Linq;

namespace JudokaWeb.Controllers
{
    public class ListAllJudokaController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            using (JudokaDataModelContext db = new JudokaDataModelContext())
            {
                SortingPagingInfo info = new SortingPagingInfo();
                info.SortField = "LastName";
                info.PageCount = Convert.ToInt32(Math.Ceiling((double)(db.Judoka.Count() / info.PageSize)));
                ViewBag.SortingPagingInfo = info;

                return View();
            }
        }
    }
}
