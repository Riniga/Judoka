using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using JudokaDataModel;
using System.Web.Http.OData;

namespace JudokaWeb.Controllers
{
    public class JudokasController : ApiController
    {
        private JudokaDataModelContext db = new JudokaDataModelContext();

        // GET: api/Judokas
        [EnableQuery]
        public IQueryable<Judoka> GetJudoka()
        {
            return db.Judoka;
        }

        // GET: api/Judokas/filter
        public IQueryable<Judoka> GetJudoka(string filter)
        {
            return db.Judoka;
        }



        // GET: api/Judokas/5
        [ResponseType(typeof(Judoka))]
        public async Task<IHttpActionResult> GetJudoka(int id)
        {
            Judoka judoka = await db.Judoka.FindAsync(id);
            if (judoka == null)
            {
                return NotFound();
            }

            return Ok(judoka);
        }

        // PUT: api/Judokas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutJudoka(int id, Judoka judoka)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != judoka.Id)
            {
                return BadRequest();
            }

            db.Entry(judoka).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JudokaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Judokas
        [ResponseType(typeof(Judoka))]
        public async Task<IHttpActionResult> PostJudoka(Judoka judoka)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Judoka.Add(judoka);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = judoka.Id }, judoka);
        }

        // DELETE: api/Judokas/5
        [ResponseType(typeof(Judoka))]
        public async Task<IHttpActionResult> DeleteJudoka(int id)
        {
            Judoka judoka = await db.Judoka.FindAsync(id);
            if (judoka == null)
            {
                return NotFound();
            }

            db.Judoka.Remove(judoka);
            await db.SaveChangesAsync();

            return Ok(judoka);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool JudokaExists(int id)
        {
            return db.Judoka.Count(e => e.Id == id) > 0;
        }
    }
}