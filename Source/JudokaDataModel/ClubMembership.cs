using System;

namespace JudokaDataModel
{
    public class ClubMembership
    {
        public int Id;
        public Club Club{ get; set; }
        public Judoka Judoka {get; set;}
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
