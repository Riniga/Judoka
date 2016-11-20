using JudokaDataModel;
using System.Data.Entity;

namespace JudokaWeb
{
    public class JudokaDataModelContext : DbContext
    {
        public DbSet<Judoka> Judoka { get; set; }
        public DbSet<ClubMembership> ClubMemberShips{ get; set; }
        public DbSet<Competition> Competitions { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Graduation> Graduations { get; set; }
        public DbSet<Refereeing> Refereeings { get; set; }
        public DbSet<License> Licenses { get; set; }    }
}



 // https://msdn.microsoft.com/en-us/library/jj193542(v=vs.113).aspx
 // För att kunna hantera ändringar 
 // Enable-Migrations 
 // 
 // För att förbereda
 // Add-Migration Add[PropertyOrClass]
 // 
 // För att uppdatera
 // Update-Database
