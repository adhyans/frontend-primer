// Another way to create object

function createTweetObject(img, name, username, followers) {
	const obj = Object.create(null);
	obj.img = img;
	obj.name = name;
	obj.username = username;
	obj.followers = followers;

	obj.incrementFollower = function () { obj.followers++ };

	return obj;
}

const data = [
	{
		img: 'https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg',
		name: 'Adhyan Srivastava',
		username: 'tech_adhyan',
		followers: 40,
		post:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti rerum explicabo dicta nihil sapiente cumque quam, ipsum assumenda sit atque a dolore! Aperiam praesentium dolore delectus, doloremque porro sit!',
		incrementFollower: function () { this.followers++ }
	},
	{
		img: 'https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg',
		name: 'Adhyan Srivastava',
		username: 'tech_adhyan',
		post:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti rerum explicabo dicta nihil sapiente cumque quam, ipsum assumenda sit atque a dolore! Aperiam praesentium dolore delectus, doloremque porro sit!',
		incrementFollower: function () { this.followers++ }
	},
	{
		img: 'https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg',
		name: 'Adhyan Srivastava',
		username: 'tech_adhyan',
		post:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti rerum explicabo dicta nihil sapiente cumque quam, ipsum assumenda sit atque a dolore! Aperiam praesentium dolore delectus, doloremque porro sit!',
			incrementFollower: function () { this.followers++ }
	}
];

function bindEvents() {
	data.forEach((post, index) => {
		const ele = document.getElementById(`follow-${index}`);
		const followTextEle = document.getElementById(`follow-number-${index}`)
		ele.addEventListener('click', function() {
			console.log("hello");
			post.incrementFollower();
			followTextEle.innerHTML = `Followers: ${post.followers}`
		})
	});
}

// number of shares 

function shares(tweetLength, usernamelength) {
	const length = tweetLength + usernamelength;
	return length / 2;
}

// number of views
function views(tweetLength, usernamelength) {
	const length = tweetLength + usernamelength;
	return length * 2;
}

// In a single session, you can only share two tweets.

function shareTweet() {
	let counter = 0;
	return function() {
		if (counter == 2) {
			alert("Max tweets shared in this session");
			return;
		}
		counter++;
		console.log(counter);
		return "shared";
	}
}

const x = shareTweet();

function shareTweetClick() {
	x();
}

function fetchTweets() {
	fetch('')
	.then(res => res.json())
	.then(res => console.log(res));
}

// fetchTweets();

function getTweetHTML(data, index) {
	const x = data.calculateLength;

	return `
    <div class="card">
      <div class="user-image">
        <img src=${data.img} alt="User Image">
      </div>
      <div class="description">
        <h1>${data.name}</h1>
        <h3>${data.username}</h3>
				<p>${data.post}</p>
				<div>
					<p id="follow-number-${index}">Followers: ${data.followers}</p>
					<p>Tweet shares: ${shares(data.post.length, data.username.length)}</p>
					<p>Number of Views: ${views(data.post.length, data.username.length)}</p>
					<button onclick="shareTweetClick()">Share Tweet</button>
					<button id="follow-${index}">Follow</button>
				</div>
			</div>
    </div>
  `;
}

function displayTweets() {
	const elementToAddTweet = document.getElementById('tweets-list');
	let tweetsHTML = '';
	data.forEach((post, index) => {
		console.log(post);
		const tweetHTML = getTweetHTML(post, index);
		tweetsHTML += tweetHTML;
	});
	elementToAddTweet.innerHTML = tweetsHTML;
}

displayTweets();
bindEvents();
