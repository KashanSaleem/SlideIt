# SlideIt
A simple responsive jquery slider plugin 
#### Demo

[...]()

#### Slider Setup


In your ```<head>``` add:

````
<script type="text/javascript" src="//path to /js/jquery-1.11.2.min.js // or jq librarery"></script>

<link rel="stylesheet" type="text/css" href="//path to // css/sliderCss.css"/>


````

Then, before your closing ```<body>``` tag add:

```
<script type="text/javascript" src="//path to /js/jquery.sliderJs.min.js"></script>

```
```markup
	<div class="slideIt">
		<ul>
			<li><img src="images/1st.png"></li>
			<li><img src="images/2nd.png"></li>
			<li><img src="images/3rd.png"></li>
		</ul>
	</div>
```
#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
autoplay | boolean | true | Enables auto play of slides 
speed | int  | 2000 | Auto play change interval
arrows | boolean | true | Enable Next/Prev arrows
bullets | boolean | true | Enable bullets under slider
imageGallery | boolean | true | Enable Image Gallery of slider images under slider


#### Example

Initialize with:

```javascript
$(window).load( function() {
	$('.slideIt').slideIt({
		autoplay:false,
		arrows:true,
		bullets :true,
	});
});
 ```

#### Dependencies

jQuery 1.11.2

#### License

Copyright (c) 2015 Muhammad Kashan Saleem

Licensed under the MIT license.
