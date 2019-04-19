<template>
  <div class="home">
  	<wfmd></wfmd>
  	<div class="columns wrap is-gapless is-multiline">
	  <div class="column is-one-fifth bg--red">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--orange">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--yellow">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--green">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--blue">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--indigo">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--violet">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--red">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--orange">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--yellow">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--green">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--blue">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--indigo">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--violet">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--red">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--orange">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--yellow">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--green">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--blue">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--indigo">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	  <div class="column is-one-fifth bg--violet">
	    <p class="color--white dis--flex v-centered h-centered">
	    	SHOES
	    </p>
	  </div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import wfmd from '@/components/WFMD.vue'

export default {
  name: 'home',
  components: {
    wfmd
  }
}
</script>

<style lang="scss" scoped>
	.dis-- {
		&flex {
			display: flex;

			&.v-centered {
				height: 100%;
				align-items: center;
			}
			&.h-centered {
				justify-content: center;
			}
		}
	}

	.column {
		height: 25vh;
	}
	.bg-- {
		&red {
			background-color: red;
		}
		&orange {
			background-color: orange;
		}
		&yellow {
			background-color: yellow;
		}
		&green {
			background-color: green;
		}
		&blue {
			background-color: blue;
		}
		&indigo {
			background-color: indigo;
		}
		&violet {
			background-color: violet;
		}
	}
	.color-- {
		&white {
			color: white;
		}
		&blue {
			color: blue;
		}
	}
</style>
