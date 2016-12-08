"use strict";

class App{
  constructor(){
    this.home = [
     
      {
        "id": 1,
	        "image": "img/taytay.jpg",
	        "RealName": " Taylor Alison Swift",
	        "StageName": " Taylor Swift",
	        "YearsActive": " 2004-present", 
	        "Birthday": " December 13, 1989 (age 26)",
	        "Genres": " Country, Pop",  
	        "Description":" Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",
      },
      {
        "id": 2,
        "image": "img/queen.jpg",
        "RealName": " Beyoncé Giselle Knowles",
        "StageName": " Queen Bee",
        "YearsActive": " 1997-present", 
        "Birthday": " September 04, 1981 (age 35)",
        "Genres": " R&B, Pop",
        "Description":" Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",  
      },

      {
        "id": 3,
        "image": "img/charlie.jpg",
        "RealName": " Charles Otto Puth Jr.",
        "StageName": " Charlie Puth",
        "YearsActive": " 1998-present", 
        "Birthday": " December 2, 1991 (age 24)",
        "Genres": " R&B, Pop",  
        "Description":" Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",
      },

      {
        "id": 4,
        "image": "img/en.jpg",
        "RealName": " Enrique Miguel Iglesias Preysler",
        "StageName": " Enrique Iglesias",
        "YearsActive": " 1994-present", 
        "Birthday": " May 08, 1975 (age 41)",
        "Genres": " Pop, Latin Pop, Dance-pop, Electropop",
        "Description":" Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",  
      },
      {
        "id": 5,
        "image": "img/gaga.jpg",
        "RealName": " Stefani Joanne Angelina Germanotta",
        "StageName": " Lady Gaga",
        "YearsActive": " 2001-present", 
        "Birthday": " March 28, 1986 (age 30)",
        "Genres": " Electropop, Dance-pop",  
        "Description":" Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",
      },
      {
        "id": 6,
        "image": "img/mad.jpg",
        "RealName": " Madonna Louise Ciccone",
        "StageName": " Madonna",
        "YearsActive": " 1979-present", 
        "Birthday": " August 16, 1958 (age 58)",
        "Genres": " Pop, Dance, Electronic rock",  
        "Description":" Is an American singer-songwriter. One of the most popular contemporary female recording artists, she is known for narrative songs about her personal life, which has received much media attention.",
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
    let image = document.getElementById('image1');
    let RealName = document.getElementById('realname1');
        let StageName = document.getElementById('stagename1');
            let YearsActive = document.getElementById('yearsactive1');
                let Birthday = document.getElementById('birthday1');
                    let Genres = document.getElementById('genres1');
                        let Description = document.getElementById('description1');
  
    let home = {      
      "image": image.value,
      "RealName": RealName.value,
         "StageName": StageName.value,
      "YearsActive": YearsActive.value,
         "Birthday": Birthday.value,
      "Genres": Genres.value,
         "Description": Description.value,
    
    };


    this.home.push(home);
   
    
    image.value = RealName.value = StageName.value = YearsActive.value =  Birthday.value = Genres.value = Description.value =  ''; 
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
  MusicSearch(RealName){
    let objects = [];
    let r = this.home;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].RealName.toUpperCase().indexOf(RealName.toUpperCase()) > -1);
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



  <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="img/ml.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/let.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="img/ms.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/ml.jpg"></a>
  </div>


   
        
    <nav>
      <div class="nav-wrapper  blue lighten-2">
          <a href="#" onclick="component.homepage()" class="brand-logo purple-text text-darken-4">Music Artist App</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
          <a href="#"onclick="component.homepage()"><i class="material-icons left">stay_primary_portrait</i>Music Home</a>
      </li>
      <li>
        <a href="#"onclick="component.createMusicArtist()"><i class="material-icons left">queue</i>Add Artist</a>  
      <li>   
        <a href="#"onclick="component.MusicList()"><i class="material-icons left">queue_music</i>Music List</a>  
      </li>
      <li>   
        <a href="#"onclick="component.MusicSearch()"><i class="material-icons left">search</i>Search Music Artist</a>  
      </li>

        </ul>
      </div>
    </nav>


        <div id="MusicHome"></div>
        <div id="musicRecent"></div>
        <div id="homepage"></div>
        <div id="ViewList"></div>
        <div id="MusicList"></div>
        <div id="createMusicArtist"></div>
        


    </main>   

     <footer class="page-footer blue lighten-2">
    <div class="container">
      <div class="row">
        <div class="col s6">
          <h5 class="white-text">Hannah Mari G. Tan</h5>
          <p class="grey-text text-lighten-4">"Music is the voice of the soul."</p>
          <p><a class="grey-text text-lighten-3" href="#">
           <img class="left" src="img/me_2.jpg"/>
         </div>
         <div class="col l4 offset-l2 s6 ">
          <h5 class="white-text "> Music Artist Application </h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!"onclick="component.homepage()">Home</li>
            <li><a class="grey-text text-lighten-3" href="#!"onclick="component.MusicList()"">Music Artist List</a></li>
            <li><a class="grey-text text-lighten-3" href="#!"onclick="component.createMusicArtist()">Create Artist Info</li>
                   
          </ul>
        </div>
        <p><a class="grey-text text-lighten-3" href="https://www.facebook.com/hannahm.tan.7">
        </div>
      </div>         
    </div>
  </div>
  <div class="footer-copyright">
  <div class="container">
   ©2016-2017 Copyright Text   
   <img class="right" src="img/han.png" style="margin-top:6px;" />   
 </div>
</div>      
</footer>
</div> 
   


    `;

    this.reRender(`
      
      ${html}
      
                  `,document.getElementById("app"));
    this.musicRecent();    
  }

  musicRecent(){
    
    let html = `
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


`;

html+=`

        <div class="row">
          
          <div class="col s6">
            <div class="card">
              <div class="card-image">
                <img src="img/love.jpg">
              </div>
                <div class="card-content center-align">
              
                  <p>"This app is about the information of some famous artist in the music industry. Artists from the year 90's up to the 20's can be seen here. I"</p>            
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
        <div class="col s6 m6">
          <div class="card">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title"><span class="indigo-text text-darken-4"><b>${r[i].StageName}</b></span>
            </div>
            <div class="card-content">
              <p>Real Name: ${r[i].RealName}</p>
              <p>Stage Name: ${r[i].StageName}</p>
              <p>Years Active: ${r[i].YearsActive}</p>
              <p>Birthday: ${r[i].Birthday}</p>
              <p>Genre: ${r[i].Genres}</p>
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
             <div class="col s12 m7">
                <h2 class="header">Horizontal Card</h2>
                <div class="card horizontal">
                  <div class="card-image">
                    <img src="${r.image}">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                    <p>Real Name: ${r.RealName}</p>
              		<p>Stage Name: ${r.StageName}</p>
            		  <p>Years Active: ${r.YearsActive}</p>
              		<p>Birthday: ${r.Birthday}</p>
             		 <p>Genres: ${r.Genres}</p>
                    </div>
                    <div class="card-action" Medium>
                      <span onclick="component.MusicDelete(${r.id})" class="new badge large red" data-badge-caption="">Delete Base</span>
                <span onclick="component.MusicList()" class="new badge large" data-badge-caption="">Back to List</span>
                    </div>
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
            
                <div class="input-field">       
                  <input onkeyup="component.MusicInventory(this.value)" id="search" type="search" placeholder="Search" required>
                    <label for="search"><i class="material-icons">search</i></label>
                      <i class="material-icons">close</i>
                </div>
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
                <div class="col s6 m6 ">
        
                <div class="card ">
                  <div class="card-image">
                    <img src="${r[i].image}">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                  <p>Real Name: ${r[i].RealName}</p>
                  <p>Stage Name: ${r[i].StageName}</p>
                  <p>Years Active: ${r[i].YearsActive}</p>
                  <p>Bithday: ${r[i].Birthday}</p>
                  <p>Genres: ${r[i].Genres}</p>
                   <p>Description: ${r[i].Description}</p>
                    </div>
                   <div class="card-action">
                    <a href="#" onclick="component.ViewList(${r[i].id})"><i class="material-icons center">assignment</i> Details</a>
                  </div>
                  </div>
                </div>
              </div>





                
            `;
  }

    html += `</div>  <div class="row">`;


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

    MusicInventory(RealName){
      
      let html = ``;
      let r = this.MusicSearch(RealName);
      for(let i=0;i<r.length;i++){
        html+= `
         <div class="col s12 m4">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].image}">
      <span class="card-title">Real Name: ${r[i].RealName}</span>
      </div>
      <div class="card-content">
      <p>Description: ${r[i].Description}</p>

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

       



<br>
<form>
 
    <center><h1>Create Music Artist</h1></center>

    <label for="image1">  <span>Artist Image:</span><input type="email" id="image1"/> </label>
    <label for="realname1"><span>Artist Real Name:</span><input type="email" id="realname1" /> </label>
    <label for="stagename1">  <span>Artist Stage Name:</span><input type="email" id="stagename1"/> </label>
    <label for="yearsactive1"><span>Years Active:</span><input type="email" id="yearsactive1" /> </label>
    <label for="birthday1">  <span>Birthday:</span><input type="email" id="birthday1"/> </label>
    <label for="genres1"><span>Genres:</span><input type="email" id="genres1" /> </label>
    <label for="description1"><span>Artist Description:</span><textarea id="description1" class="textarea-field"></textarea> </label>

     <div class="center-align">
       <button onclick="component.createDesign()" class="btn waves-effect waves-light">Add Artist</button></br>
       <br><button onclick="component.MusicList()" class="btn waves-effect waves-light">Back To List</button></br>
     </div>
</div>
</form>
</br>





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