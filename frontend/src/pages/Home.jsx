import golfImage from "../assets/golf.jpg";

function Home(){

return(

<div

style={{

minHeight:"200vh",

backgroundImage:`
linear-gradient(
rgba(15,23,42,0.55),
rgba(15,23,42,0.65)
),
url(${golfImage})
`,

backgroundSize:"cover",

backgroundPosition:"center",

backgroundAttachment:"fixed",

paddingTop:"60px"

}}

>

<div className="container">


{/* HERO SECTION */}

<div
className="card"
style={{

background:"rgba(255,255,255,0.92)",

backdropFilter:"blur(6px)"

}}
>

<h1>

🏌 Launch Your <span className ="highlight">Golf</span> Journey With Charity Impact

</h1>

<p>

Track golf performance, participate in exciting monthly draws,
and support meaningful charities while improving your skills.

</p>

<br/>

<a href="/register">

<button>

Get Started →

</button>

</a>

</div>


{/* FEATURES */}

<div
className="card"
style={{background:"rgba(255,255,255,0.92)"}}
>

<h2>

✨ Platform Features

</h2>

<ul>

<li>📊 Track last 5 golf scores</li>

<li>🎯 Participate in monthly lucky draw</li>

<li>❤️ Support your favourite charity</li>

<li>📈 Improve performance consistency</li>

<li>🏆 Chance to win exciting prizes</li>

<li>📅 Monthly automated draw system</li>

</ul>

</div>


{/* HOW IT WORKS */}

<div
className="card"
style={{background:"rgba(255,255,255,0.92)"}}
>

<h2>

⚙ How it works

</h2>

<ol>

<li>Register and choose subscription plan</li>

<li>Select your preferred charity</li>

<li>Enter your golf scores regularly</li>

<li>System keeps track of last 5 scores</li>

<li>Monthly draw selects winning numbers</li>

<li>Matching scores win prizes</li>

</ol>

</div>


{/* BENEFITS */}

<div
className="card"
style={{background:"rgba(255,255,255,0.92)"}}
>

<h2>

🚀 Benefits

</h2>

<ul>

<li>Stay consistent with golf practice</li>

<li>Motivation through reward system</li>

<li>Contribute to social causes</li>

<li>Simple and easy performance tracking</li>

<li>Engaging monthly competition</li>

</ul>

</div>


{/* CALL TO ACTION */}

<div
className="card"
style={{
textAlign:"center",
background:"rgba(255,255,255,0.95)"
}}
>

<h2>

Start improving your golf game today!

</h2>

<p>

Join the platform and track your progress while supporting charities.

</p>

<br/>

<a href="/register">

</a>

</div>


</div>

</div>

)

}

export default Home;