const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        bar.addEventListener('click', () => {
            bars.forEach(b => {
                if (b !== bar) {
                    b.classList.remove('expand');
                }
            });
            bar.classList.toggle('expand');
        });
    });