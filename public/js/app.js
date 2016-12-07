"use strict";

class App{
  constructor(){
    this.home = [
     
      {
        "id": 1,
        "image": "img/taytay.jpg",
        "RealName": "Taylor Alison Swift",
        "StageName": "Taylor Swift",
        "YearsActive": "2004-present", 
        "Birthday": "December 13, 1989 (age 26)",
        "Genres": "Country, Pop",  
        "Discription":"Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",
      },
      {
        "id": 2,
        "image": "img/queen.jpg",
        "RealName": "Beyoncé Giselle Knowles",
        "StageName": "Queen Bee, Beyoncé",
        "YearsActive": "1997-present", 
        "Birthday": "September 04, 1981 (age 35)",
        "Genres": "R&B, Pop",  
      },

      {
        "id": 3,
        "image": "img/Charlie.jpg",
        "RealName": "Charles Otto Puth Jr.",
        "StageName": "Charlie Puth",
        "YearsActive": "1998-present", 
        "Birthday": "December 2, 1991 (age 24)",
        "Genres": "R&B, Pop",  
      },

      {
        "id": 4,
        "image": "img/en.jpg",
        "RealName": "Enrique Miguel Iglesias Preysler",
        "StageName": "Enrique Iglesias",
        "YearsActive": "1994-present", 
        "Birthday": "May 08, 1975 (age 41)",
        "Genres": "Pop, Latin Pop, Dance-pop, Electropop, Raggaeton, EDM, Pop-Rock, House, R&B",  
      },
      {
        "id": 5,
        "image": "img/gaga.jpg",
        "RealName": "Stefani Joanne Angelina Germanotta",
        "StageName": "Lady Gaga",
        "YearsActive": "2001-present", 
        "Birthday": "March 28, 1986 (age 30)",
        "Genres": "Electropop, Dance-pop",  
      },
      {
        "id": 6,
        "image": "img/mad.jpg",
        "RealName": "Madonna Louise Ciccone",
        "StageName": "Madonna",
        "YearsActive": "1979-present", 
        "Birthday": "August 16, 1958 (age 58)",
        "Genres": "Pop, Dance, Electronic rock",  
      },
    ];


  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  createDesign(){
    let name = document.getElementById('ExFeeling_name');
    let Description = document.getElementById('ExFeeling_Description');
  
    let home = {      
      "name": name.value,
      "Description": Description.value,
    };


    this.home.push(home);
   
    name.value = Description.value = ''; 
  } 

  MusicDelete(key){
    let r = this.home;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.home.splice(i,1);
        break;
      }
    }   
    this.MusicList();
  }

  MusicSearchById(id){

     let r = this.home;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  }
  MusicSearch(name){
    let objects = [];
    let r = this.home;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
        }
      }
    return objects;
    }
  }

class Component extends App{
  constructor(){
    
    super();
  }

  MusicLayout(){
    let html = `

<div class="carousel carousel-slider center" data-indicators="true">
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">button</a>
    </div>
    <div class="carousel-item " href="#one!" ><img src="img/ml.jpg">
      <h2>First Panel</h2>
      <p class="white-text">This is your first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!"><img src="img/let.jpg">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!"><img src="img/ms.jpg">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!"><img src="img/ml.jpg">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is your fourth panel</p>
    </div>
  </div>
        
      <nav>
    <div class="nav-wrapper   blue lighten-2">
      <a href="#" onclick="component.homepage()" class="brand-logo purple-text text-darken-4"><i class="Medium material-icons left">perm_identity</i>Music Artist App</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <a href="#"onclick="component.homepage()"><i class="material-icons left">list</i>Music Home</a>
      </li>
        <li>
        <a href="#">Add Artist</a>  
      </ul>
    </div>
  </nav>
<center>
<p></p>
    <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="img/mars.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/lady.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/meg.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/tay.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="img/jb.jpg"></a>
    <a class="carousel-item" href="#six!"><img src="img/foo.png"></a>
    <a class="carousel-item" href="#seven!"><img src="img/beyonce.jpg"></a>
    <a class="carousel-item" href="#eight!"><img src="img/der.jpg"></a>
    <a class="carousel-item" href="#nine!"><img src="img/cp.jpg"></a>
    <a class="carousel-item" href="#ten!"><img src="img/mars.jpg"></a>
    <a class="carousel-item" href="#eleven!"><img src="img/ca.jpg"></a>
    <a class="carousel-item" href="#twelve!"><img src="img/x.jpg"></a>
    <a class="carousel-item" href="#thirteen!"><img src="img/enr.jpg"></a>
    <a class="carousel-item" href="#fourteen!"><img src="img/mraz.jpg"></a>
    
  </div>

</center>

        <div id="MusicHome"></div>
        <div id="musicRecent"></div>
        <div id="homepage"></div>
        <div id="ViewList"></div>
        <div id="MusicList"></div>
        <div id="createMusicArtist"></div>
        
      <footer class="page-footer blue lighten-2">
          <div class="container">
            <div class="row">
            <span class="purple-text text-purple-darken-4">
             <p> 
                    "Music is a higher revelation 
                    than all wisdom and philosphy. 
                    Music is the electrical soil 
                    in which the spirit lives, thinks and invents." </p>
              <center><p> ~ Ludwig van Beethoven ~ </p></center>
              </span>
              <p class="grey-text text-lighten-4"</p>         
              </div>
              <div class="col l4 offset-l2 s12">                
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text        
            </div>
          </div>
        </footer>
    `;

    this.reRender(`
      
      ${html}
      
                  `,document.getElementById("app"));
    this.musicRecent();    
  }

  musicRecent(){
    
    let html = `



        <div class="row">
          
          <div class="col s6">
            <div class="card">
              <div class="card-image">
                <img src="img/love.jpg">
              </div>
                <div class="card-content center-align">
                  <p>"----------"</p>
                  <p>"Music is a higher revelation than all wisdom and philosphy. Music is the electrical soil in which the spirit lives, thinks and invents."</p>            
                </div>
            </div>
          </div>


          <div class="col s6">
            <div class="card">
              <div class="card-image">
                <img src="img/rest.jpg">
              </div>
                  <div class="card-content center-align">
                    <p>"Music is a higher revelation than all wisdom and philosphy. Music is the electrical soil in which the spirit lives, thinks and invents. By  Ludwig van Beethoven "</p>
                  </div>
            </div>
          </div>

          `;

    let r = this.home;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
        html+= `
      
       <div class="column">
        <div class="col m4">
          <div class="card">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].StageName}</span>
            </div>
            <div class="card-content">
              <p>${r[i].RealName}</p>
              <p>${r[i].StageName}</p>
              <p>${r[i].YearsActive}</p>
              <p>${r[i].Birthday}</p>
              <p>${r[i].Genres}</p>
            </div>
             <div class="card-action">
             <a href="#" onclick="component.ViewList(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
          </div>
        </div>
      </div>
        

               `;
  }

      html += `</div>`;

      this.render(`   
      
        ${html}
      
      `,document.getElementById("musicRecent"));
  
  }

    ViewList(id){
      
    let r = this.MusicSearchById(id);
    let html = `

      <div class="row">       
        <div class="col s12 m6">
          <h5 class="center-align">${r.StageName}</h5>
            <div class="card horizontal small center-align">
              <p>${r.Description}</p>
            </div>
              <div class="card-action small">               
                <span onclick="component.MusicDelete(${r.id})" class="new badge large red" data-badge-caption="">Delete Base</span>
                <span onclick="component.MusicList()" class="new badge large" data-badge-caption="">Back to List</span>
              </div>            
        </div>     
      </div>    
        
               `;

      this.reRender(`   
      
        ${html}     

      `,document.getElementById("ViewList"));
    
    $('#ViewList').show();
    $('#musicRecent').hide();
    $('#MusicList').hide();
    $('#createMusicArtist').hide();
    $('#MusicHome').hide();
    $('#homepage').hide();      
  }

    MusicList(){
    
      let html = `
        
        </br>
          <nav>
            <div class="nav-wrapper white">
              <form>
                <div class="input-field">       
                  <input onkeyup="component.MusicInventory(this.value)" id="search" type="search" placeholder="Search" required>
                    <label for="search"><i class="material-icons">search</i></label>
                      <i class="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        </br>



                `;

      html += `
      
        <div class="row" id="MusicInventory">
      
              `;
    
      let r = this.home;
      for(let i=0;i<r.length;i++){
      html+= `
        
        <div class="row">


          <div class="col s12 m6">
            <div class="card pink accent-12">
              <div class="row">
                <div class="card-content white-text">
                  <span class="card-title">${r[i].name}</span>
                   <p>${r[i].RealName}</p>
                   <p>${r[i].StageName}</p>
                   <p>${r[i].YearsActive}</p>
                   <p>${r[i].Birthday}</p>
                   <p>${r[i].Genres}</p>
                  <p class="center-align">${r[i].Description}</p>
                </div>
                  <div class="card-action">
                    <a href="#" onclick="component.ViewList(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
                  </div>
              </div>
            </div>
          </div>
                
            `;
  }

    html += `</div>`;


    this.reRender(`
      
      ${html}
      
      `,document.getElementById("MusicList"));
    
    $('#MusicList').show();
    $('#ViewList').hide();
    $('#musicRecent').hide();
    $('#createMusicArtist').hide();       
    $('#MusicHome').hide();
      $('#homepage').hide();      
  
  }

    MusicInventory(name){
      
      let html = ``;
      let r = this.MusicSearch(name);
      for(let i=0;i<r.length;i++){
        html+= `
          
          <div class="col s12 m4">
            <div class="card small hoverable">
              <span class="card-title">${r[i].name}</span>
                <div class="card-content center-align">
                <p>${r[i].RealName}</p>
                   <p>${r[i].StageName}</p>
                   <p>${r[i].YearsActive}</p>
                   <p>${r[i].Birthday}</p>
                   <p>${r[i].Genres}</p>
                  <p>${r[i].Description}</p>
                </div>
                  <div class="card-action">
                    <a href="#" onclick="component.ViewList(${r[i].id})">More</a>
                  </div>
            </div>
          </div>
                
                `;
  
  }   
    
    this.reRender(`
    
      ${html}
    
      `,document.getElementById("MusicInventory"));
    
    $('#MusicList').show();
    $('#ViewList').hide();
    $('#musicRecent').hide();  
    $('#createMusicArtist').hide();
    $('#MusicHome').hide();   
      $('#homepage').hide();       
  
  }

    createMusicArtist(){
      let html = `

        <div class="row">
          <form class="col s12">
            <h5 class="center-align">Create New Post</h5>
            <button onclick="component.createDesign()" class="btn waves-effect waves-light">Save</button>
          <div class="row">
            <div class="input-field col s6">
              <input disabled value="${this.home.length+1}" id="Feeling_id" type="text" class="validate">
            </div>
          </div>
              <div class="row">
                <div class="input-field col s6">
                <input id="MusicArtist_name" type="text" class="validate">
                <label for="MusicArtist_name">Code Name</label>
              </div>
              <div class="input-field col s6">
                <input id="ExFeeling_Description" type="text" class="validate">
                <label for="ExFeeling_Description">Express Your Feeling/s.</label>
              </div>
          </form>
      </div>      

    `;

    this.reRender(`
    
      ${html}
    
      `,document.getElementById("createMusicArtist"));
    
      $('#createMusicArtist').show();
    $('#MusicList').hide();
    $('#ViewList').hide();
    $('#musicRecent').hide();  
    $('#MusicHome').hide();  
    $('#homepage').hide();     
    $('#homepage').hide();       
  
  }

  homepage(){
      let html = `
    `;

    this.reRender(`
    
      ${html}
    
      `,document.getElementById("createMusicArtist"));
    
    $('#createMusicArtist').hide();
    $('#MusicList').hide();
    $('#ViewList').hide();
    $('#musicRecent').show();  
    $('#MusicHome').hide();  
    $('#homepage').hide();      
  
    }
  } 
    
    let component = new Component();
    component.MusicLayout();