const data = [
	{
		img: 'https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg',
		name: 'Adhyan Srivastava',
		username: 'tech_adhyan',
		post:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti rerum explicabo dicta nihil sapiente cumque quam, ipsum assumenda sit atque a dolore! Aperiam praesentium dolore delectus, doloremque porro sit!'
	},
	{
		img: 'https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg',
		name: 'Adhyan Srivastava',
		username: 'tech_adhyan',
		post:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti rerum explicabo dicta nihil sapiente cumque quam, ipsum assumenda sit atque a dolore! Aperiam praesentium dolore delectus, doloremque porro sit!'
	},
	{
		img: 'https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg',
		name: 'Adhyan Srivastava',
		username: 'tech_adhyan',
		post:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti rerum explicabo dicta nihil sapiente cumque quam, ipsum assumenda sit atque a dolore! Aperiam praesentium dolore delectus, doloremque porro sit!'
	}
];

function fetchTweets() {
	fetch('https://api.github.com/users', { mode: 'cors' }).then((res) => {
		console.log(res);
	});
}

fetchTweets();

function getTweetHTML(data) {
	return `
    <div class="card">
      <div class="user-image">
        <img src=${data.img} alt="User Image">
      </div>
      <div class="description">
        <p>${data.name}</p>
        <p>${data.username}</p>
        <p>${data.post}</p>
      </div>
    </div>
  `;
}

function displayTweets() {
	const elementToAddTweet = document.getElementById('tweets-list');
	let tweetsHTML = '';
	data.forEach((post) => {
		const tweetHTML = getTweetHTML(post);
		tweetsHTML += tweetHTML;
	});
	elementToAddTweet.innerHTML = tweetsHTML;
}

displayTweets();
