module.exports = {
    template: require('./dotnetdoc.html'),
	beforeRouteEnter(to, from, next) {
		next(vm => {
            vm.$root.title = 'COE Test Automation Framework (dotNet) Documentation';
			jQuery('html').addClass('allwidth');
	    })
    }
}