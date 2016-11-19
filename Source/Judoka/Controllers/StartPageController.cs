using System.Web.Mvc;

namespace Judoka.Controllers
{
    public class StartPageController : Controller
    {
        // GET: StartPage
        public ActionResult Index()
        {
            return View();
        }
    }
}