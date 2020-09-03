using CitiesManagment.models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace codetest.Controllers
  {
    [ApiController]
    [Route("citydata")]
    public class CitiesController : ControllerBase {


      [HttpGet]
      public City[] Get(){
        var stockholmAddition = new Addition[]{
          new Addition(300, "Fönsterputs"),
          new Addition(150, "Balkongstädning")
        };

        var uppsalaAddition = new Addition[]{
          new Addition(300, "Fönsterputs"),
          new Addition(150, "Balkongstädning"),
          new Addition(400, "Bortforsling av skräp")
        };

        var cities = new City[]{
          new City("Stockholm", 65, stockholmAddition, "0"),
          new City("Uppsala", 55, uppsalaAddition, "1")

        };
        return cities;
      }
    }
  }