var bodyHeight = document.documentElement.offsetHeight

var items = document.querySelectorAll('.item')

window.addEventListener( 'scroll', function() {

	var scrollProgress = window.scrollY / ( bodyHeight - window.innerHeight )

		for (var i = 0; i < items.length; i++) {

			var minPercentage = i * (1 / items.length)
			var maxPercentage = (i + 1) * (1 / items.length)

			if (scrollProgress > minPercentage && scrollProgress < maxPercentage) {

				var scaleValue = scrollProgress.map(minPercentage, maxPercentage, 0, 1)

				items[i].style.transform = 'scale(' + scaleValue + ')'

				if (!items[i].classList.contains('is-visible')) {

					items[i].classList.add('is-visible')

				}

			} else if (scrollProgress < minPercentage + 0.1) {

				items[i].style.transform = 'scale(0)'

				if (items[i].classList.contains('is-visible')) {

					items[i].classList.remove('is-visible')

				}

			} else if (scrollProgress > maxPercentage - 0.1) {

				items[i].style.transform = 'scale(1)'

				if (items[i].classList.contains('is-visible')) {

					items[i].classList.remove('is-visible')

				}

			}

		}

})

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
