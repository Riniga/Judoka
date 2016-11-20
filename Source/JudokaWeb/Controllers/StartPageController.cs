using System.Web.Mvc;

namespace JudokaWeb.Controllers
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