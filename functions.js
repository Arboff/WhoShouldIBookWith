image_array = [images/'1.png',
images/'2.png',
images/'3.png',
images/'4.png',
images/'5.png',
images/'6.png',
images/'7.png',
images/'8.png',
images/'9.png',
images/'10.png',
images/'11.png',
images/'12.png',
images/'13.png',
images/'14.png',
images/'15.png',
images/'16.png',
images/'17.png',
images/'18.png',
images/'19.png',
images/'20.png',
images/'21.png',
images/'22.png',
images/'23.png',
images/'24.png',
images/'25.png',
images/'26.png',
images/'27.png',
images/'28.png',
images/'29.png',
images/'30.png',
images/'31.png',
images/'32.png',
images/'33.png',
images/'34.png',
images/'35.png',
images/'36.png',
images/'37.png',
images/'38.png',
images/'39.png',
images/'40.png',
images/'41.png',
images/'42.png',
images/'43.png',
images/'44.png',
images/'45.png',
images/'46.png',
images/'47.png',
images/'48.png',
images/'49.png',
images/'50.png',
images/'51.png',
images/'52.png']

function get_random_image(){
  random_index = Math.floor(Math.random() * image_array.length);

  select_image = image_array[random_index]

 document.getElementById('image_shower').src = `./images/${select_image}`



}
