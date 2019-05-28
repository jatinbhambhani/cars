using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;



namespace my_new_appreactreduxspa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsAPIController : ControllerBase
    {


        // GET: api/CarsAPI
        [HttpGet]
        public Object Get()
        {

            string json = @"[{""name"":""Bradley"",""cars"":[{""brand"":""MG"",""colour"":""Blue""}]},{""name"":""Demetrios"",""cars"":[{""brand"":""Toyota"",""colour"":""Green""},{""brand"":""Holden"",""colour"":""Blue""}]},{""name"":""Brooke"",""cars"":[{""brand"":""Holden"",""colour"":""""}]},{""name"":""Kristin"",""cars"":[{""brand"":""Toyota"",""colour"":""Blue""},{""brand"":""Mercedes"",""colour"":""Green""},{""brand"":""Mercedes"",""colour"":""Yellow""}]},{""name"":""Andre"",""cars"":[{""brand"":""BMW"",""colour"":""Green""},{""brand"":""Holden"",""colour"":""Black""}]},{""name"":null,""cars"":[{""brand"":""Mercedes"",""colour"":""Blue""}]},{""name"":"""",""cars"":[{""brand"":""Mercedes"",""colour"":""Red""},{""brand"":""Mercedes"",""colour"":""Blue""}]},{""name"":""Matilda"",""cars"":[{""brand"":""Holden"",""colour"":null},{""brand"":""BMW"",""colour"":""Black""}]},{""name"":""Iva"",""cars"":[{""brand"":""Toyota"",""colour"":""Purple""}]},{""name"":null,""cars"":[{""brand"":""Toyota"",""colour"":""Blue""},{""brand"":""Mercedes"",""colour"":""Blue""}]}]";


            JArray a = JArray.Parse(json);
            return a;

        }
        //



        //

        // GET: api/CarsAPI
        // [HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/CarsAPI/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CarsAPI
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/CarsAPI/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}