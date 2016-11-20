using System.Collections.Generic;

namespace JudokaDataModel
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Match> Matches { get; set; }
        public virtual ICollection<Result> Results { get; set; }

    }
}
