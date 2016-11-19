using System.Web.Optimization;

namespace Judoka
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                        "~/Content/js/jquery-{version}.js",
                        "~/Content/js/boostrap.js",
                        "~/Content/js/judoka.js"));

            bundles.Add(new StyleBundle("~/bundles/styles").Include(
                        "~/Content/css/bootstrap.css",
                        "~/Content/css/starter-template.css"));
        }
    }
}
