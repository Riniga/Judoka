using System.Web.Optimization;

namespace JudokaWeb
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                        "~/Content/js/jquery-{version}.js",
                        "~/Content/js/jquery.tablesorter.js",
                        "~/Content/js/boostrap.js",
                        "~/Content/js/TableWithSortingAndPagination.js",
                        "~/Content/js/JudokaWeb.js"));

            bundles.Add(new StyleBundle("~/bundles/styles").Include(
                        "~/Content/css/bootstrap.css",
                        "~/Content/css/starter-template.css"));
        }
    }
}
