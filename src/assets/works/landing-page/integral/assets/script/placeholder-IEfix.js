onload = function () {
    function hasPlaceholderSupport() {
        var input = document.createElement('input');
        return ('placeholder' in input);
    }

    if (!hasPlaceholderSupport()) {
        var inputs = document.getElementsByTagName('input');
        for (var i = 0, count = inputs.length; i < count; i++) {
            if (inputs[i].getAttribute('placeholder')) {
                inputs[i].style.cssText = "color:#939393;font-style:normal"
                inputs[i].value = inputs[i].getAttribute("placeholder");
                inputs[i].onclick = function () {
                    if (this.value == this.getAttribute("placeholder")) {
                        this.value = '';
                        this.style.cssText = "color:#000;font-style:normal;"
                    }
                }
                inputs[i].onblur = function () {
                    if (this.value == '') {
                        this.value = this.getAttribute("placeholder");
                        this.style.cssText = "color:#939393;font-style:normal;"
                    }
                }
            }
        }
    }
}
