<script setup>


</script>

<template>
 
	<header>
		<nav id="nav-bar">
				<ul>
					<li>
					<RouterLink to="/">Home</RouterLink>
					</li>
					<li>
					<RouterLink to="/search">Search</RouterLink>
					</li>
				</ul>
			</nav>
	</header>

</template>

<style scoped>

header {
	background-color: #121212;
	padding: 1rem 0;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
}

#nav-bar {
	width: 100%;
	display: flex;
	justify-content: center;
}

#nav-bar ul {
	list-style: none;
	display: flex;
	gap: 2rem;
	padding: 0;
	margin: 0;
}

#nav-bar li {
	display: inline;
}

#nav-bar a {
	text-decoration: none;
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	padding: 10px 15px;
	transition: background-color 0.2s ease-in-out;
}

#nav-bar a:hover {
	background-color: #333;
	color: #770053; 
}

main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

</style>