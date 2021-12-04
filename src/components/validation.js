/* functions used in validation */

const formatPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function isEmpty(s){
    return !s.length;
}

export  {formatPrice, isNumber, isEmpty}