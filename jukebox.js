// JUKEBOX
  function Song(artist, album, title, file_path) {
    this.artist = artist;
    this.album = album;
    this.title = title;
    this.file_path = file_path;
    this.mySound = new Audio();
  }



  function Jukebox() {

    this.jukebox_songs = [];
    this.queued_songs = [];

    
    this.add_songs_to_jukebox = function(song) {
      return this.jukebox_songs.push(song);
    }
    
    this.add_songs_to_queue = function(song) {
      return this.queued_songs.push(song);
    }

    this.play = function(song) {
      $("#audio")[0].play();      
    }

    this.pause = function(song) {
      $("#audio")[0].pause();      
    }

    this.stop = function(song) {
      $("#audio")[0].pause();      
      $("#audio")[0].currentTime = 0;      
    }


} // end Jukebox


// INSTANTIATE JUKBOX
  var jukebox = new Jukebox() 


// NEW SONG LIST
  var song1 = new Song("Michael Jackson", "Thriller", "Wanna Be Startin' Somethin'", "thriller/01_wanna_be_startin_somethin.mp3")
  var song2 = new Song("Michael Jackson", "Thriller", "Baby Be Mine", "thriller/02_baby_be_mine.mp3")
  var song3 = new Song("Michael Jackson", "Thriller", "The Girl is Mine", "thriller/03_the_girl_is_mine.mp3")
  var song4 = new Song("Michael Jackson", "Thriller", "Thriller", "thriller/04_thriller.mp3")
  var song5 = new Song("Michael Jackson", "Thriller", "Beat It", "thriller/05_beat_it.mp3")
  var song6 = new Song("Michael Jackson", "Thriller", "Billie Jean", "thriller/06_billie_jean.mp3")
  var song7 = new Song("Michael Jackson", "Thriller", "Human Nature", "thriller/07_human_nature.mp3")
  var song8 = new Song("Michael Jackson", "Thriller", "PYT", "thriller/08_pyt.mp3")
  var song9 = new Song("Michael Jackson", "Thriller", "The Lady in My Life", "thriller/09_the_lady_in_my_life.mp3")


//ADD SONG TO JUKBOX
  jukebox.add_songs_to_jukebox(song1);
  jukebox.add_songs_to_jukebox(song2);
  jukebox.add_songs_to_jukebox(song3);
  jukebox.add_songs_to_jukebox(song4);
  jukebox.add_songs_to_jukebox(song5);
  jukebox.add_songs_to_jukebox(song6);
  jukebox.add_songs_to_jukebox(song7);
  jukebox.add_songs_to_jukebox(song8);
  jukebox.add_songs_to_jukebox(song9);

// SONG FILE PATH/URL
  var song1_path = jukebox.jukebox_songs[0].file_path;
  var song2_path = jukebox.jukebox_songs[1].file_path;
  var song3_path = jukebox.jukebox_songs[2].file_path;
  var song4_path = jukebox.jukebox_songs[3].file_path;
  var song5_path = jukebox.jukebox_songs[4].file_path;
  var song6_path = jukebox.jukebox_songs[5].file_path;
  var song7_path = jukebox.jukebox_songs[6].file_path;
  var song8_path = jukebox.jukebox_songs[7].file_path;
  var song9_path = jukebox.jukebox_songs[8].file_path;

// SONG TITLE
  var song1_title = jukebox.jukebox_songs[0].title;
  var song2_title = jukebox.jukebox_songs[1].title;
  var song3_title = jukebox.jukebox_songs[2].title;
  var song4_title = jukebox.jukebox_songs[3].title;
  var song5_title = jukebox.jukebox_songs[4].title;
  var song6_title = jukebox.jukebox_songs[5].title;
  var song7_title = jukebox.jukebox_songs[6].title;
  var song8_title = jukebox.jukebox_songs[7].title;
  var song9_title = jukebox.jukebox_songs[8].title;




// ACTIONS
  $(document).ready(function() {
    

  // PLAY RANDOM SONG
    $("#jukebox").on("click", function() {
      var random_index = Math.floor(Math.random() * jukebox.jukebox_songs.length)

      for (var i = [0]; i < jukebox.jukebox_songs.length; i++) {
        $("#audio").attr("src", jukebox.jukebox_songs[random_index].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[random_index].title + " - " + jukebox.jukebox_songs[random_index].artist)
      }

      jukebox.play();
    })

  // PLAY CURRENT SONG, IF PAUSED
    $("#play_btn").on("click", function() {
      jukebox.play();
    })

  // PAUSE MUSIC
    $("#pause_btn").on("click", function() {
      jukebox.pause();
    })
    
  // STOP MUSIC
    $("#stop_btn").on("click", function() {
        $("#audio").removeAttr("src");
        $("#now_playing").text("");
      jukebox.stop();
    })


// PLAY NEXT SONG 
  // Loop function to get index position  
  $("#next_btn").on("click", function() {
    var current_song_file_path = document.getElementById("audio").getAttribute("src");
  
    function find_jukebox_songs_index(array, prop, value) {
      for (i = 0; i < array.length; i += 1) {
        if (array[i][prop] === value) {
          return i;
        }
      }
    }
  // Current song index 
    var current_song_index = find_jukebox_songs_index(jukebox.jukebox_songs, "file_path", current_song_file_path);
    console.log(current_song_index);
     
  // Play next song at new index
        $("#audio").attr("src", jukebox.jukebox_songs[current_song_index + 1].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[current_song_index + 1].title + " - " + jukebox.jukebox_songs[current_song_index + 1].artist)
        jukebox.play();
    }) 


// PLAY PREVIOUS SONG
  $("#previous_btn").on("click", function() {
    var current_song_file_path = document.getElementById("audio").getAttribute("src");
  
    function find_jukebox_songs_index(array, prop, value) {
      for (i = 0; i < array.length; i += 1) {
        if (array[i][prop] === value) {
          return i;
        }
      }
    }
  // Current song index 
    var current_song_index = find_jukebox_songs_index(jukebox.jukebox_songs, "file_path", current_song_file_path);
    console.log(current_song_index);

  // Play next song at new index
        $("#audio").attr("src", jukebox.jukebox_songs[current_song_index - 1].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[current_song_index - 1].title + " - " + jukebox.jukebox_songs[current_song_index - 1].artist)
        jukebox.play();
    })


  // PLAY QUEUED MUSIC
    $("#play_queued_song").on("click", function() {
      for (var i = 0; i < jukebox.queued_songs.length; i++) {
        var song_queued = jukebox.queued_songs[i];
        // console.log(song_queued);
   
      $("#audio").attr("src", song_queued.file_path);
      // audio.playbackRate = 4;
      $("#now_playing").text(jukebox.queued_songs[0].title + " - " + jukebox.queued_songs[0].artist)
      jukebox.play();

      // Event listener for next song
      audio.addEventListener('ended', function() { 
        // jukebox.play([i]);
      var current_song_file_path = document.getElementById("audio").getAttribute("src");
  
      function find_jukebox_queued_songs_index(array, prop, value) {
        for (i = 0; i < array.length; i += 1) {
          if (array[i][prop] === value) {
            return i;
          }
        }
      }
    // Current song index 
      var current_song_index = find_jukebox_queued_songs_index(jukebox.queued_songs, "file_path", current_song_file_path);
      // console.log(current_song_index);
     
    // Play next song at new index
      $("#audio").attr("src", jukebox.queued_songs[current_song_index + 1].file_path);
      $("#now_playing").text(jukebox.queued_songs[current_song_index + 1].title + " - " + jukebox.queued_songs[current_song_index + 1].artist)
        // audio.playbackRate = 4;
        jukebox.play();
        }, false);
        i++;
      }  
    })




  // SONG AlBUM 
    // document.getElementById("album").innerHTML = song1_title;

  // SONG TITLES TO DOM 
    document.getElementById("song1").innerHTML = song1_title;
    document.getElementById("song2").innerHTML = song2_title;
    document.getElementById("song3").innerHTML = song3_title;
    document.getElementById("song4").innerHTML = song4_title;
    document.getElementById("song5").innerHTML = song5_title;
    document.getElementById("song6").innerHTML = song6_title;
    document.getElementById("song7").innerHTML = song7_title;
    document.getElementById("song8").innerHTML = song8_title;
    document.getElementById("song9").innerHTML = song9_title;
  


  // ADD TO QUEUE
    $("#song1_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song1);
      $("#queue_list").append(jukebox.jukebox_songs[0].title + "<br>");
    })

    $("#song2_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song2);
      $("#queue_list").append(jukebox.jukebox_songs[1].title + "<br>");
    })

    $("#song3_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song3);
      $("#queue_list").append(jukebox.jukebox_songs[2].title + "<br>");
    })

    $("#song4_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song4);
      $("#queue_list").append(jukebox.jukebox_songs[3].title + "<br>");
    })

    $("#song5_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song5);
      $("#queue_list").append(jukebox.jukebox_songs[4].title + "<br>");
    })

    $("#song6_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song6);
      $("#queue_list").append(jukebox.jukebox_songs[5].title + "<br>");
    })

    $("#song7_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song7);
      $("#queue_list").append(jukebox.jukebox_songs[6].title + "<br>");
    })

    $("#song8_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song8);
      $("#queue_list").append(jukebox.jukebox_songs[7].title + "<br>");
    })

    $("#song9_add_to_queue").on("click", function() {
      jukebox.add_songs_to_queue(song9);
      $("#queue_list").append(jukebox.jukebox_songs[8].title + "<br>");
    })

  






  // PLAY INDIVIDUAL SONG
    $("#song1").on("click", function() {
      $("#audio").attr("src", jukebox.jukebox_songs[0].file_path);
      $("#now_playing").text(jukebox.jukebox_songs[0].title + " - " + jukebox.jukebox_songs[0].artist)
      jukebox.play();
    })
    
    $("#song2").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[1].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[1].title + " - " + jukebox.jukebox_songs[1].artist)
        jukebox.play();
      })
      
    $("#song3").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[2].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[2].title + " - " + jukebox.jukebox_songs[2].artist)
        jukebox.play();
      })
      
    $("#song4").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[3].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[3].title + " - " + jukebox.jukebox_songs[3].artist)
        jukebox.play();
      })
      
    $("#song5").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[4].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[4].title + " - " + jukebox.jukebox_songs[4].artist)
        jukebox.play();
      })
      
    $("#song6").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[5].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[5].title + " - " + jukebox.jukebox_songs[5].artist)
        jukebox.play();
      })
      
    $("#song7").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[6].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[6].title + " - " + jukebox.jukebox_songs[6].artist)
        jukebox.play();
      })
      
    $("#song8").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[7].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[7].title + " - " + jukebox.jukebox_songs[7].artist)
        jukebox.play();
      })
      
    $("#song9").on("click", function() {
        $("#audio").attr("src", jukebox.jukebox_songs[8].file_path);
        $("#now_playing").text(jukebox.jukebox_songs[8].title + " - " + jukebox.jukebox_songs[8].artist)
        jukebox.play();
      })
      
  




  }) // end doc ready











