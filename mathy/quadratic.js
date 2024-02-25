function checker(a, b, c){
    if (a === 0) {
        const notParabola = "This is not a parabola.";
        if ([b, c].some(value => value === null || isNaN(parseInt(value)))){
            if (b == Infinity || b == -Infinity) {
                return `${notParabola} This is a vertical line, aka one with an undefined slope.`;
            }
            return "Your equation can't be computed. Your constant may be infinity, or you have invalid input.";
        }
        if (b === 0) {
            return `${notParabola} This is a line with zero slope and an ordinate of ${c}.`
        }
        return `${notParabola} This is a line with a slope of ${b} and an ordinate of ${c}. y = ${b}x + ${c}.`;
    } else if ([a, b, c].some(value => value === null || isNaN(parseInt(value)))){
        return "Your input can't be computed. Either your highest degree divides by zero, or you are using a non-numeric value somewhere.";
    } else {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        return [a, b, c];
    }
}

function quadraticInfo(secondDegree, firstDegree, constant) {
    const checked = checker(secondDegree, firstDegree, constant);
    let a, b, c;

    if (typeof checked === 'string') {
        console.log(checked);
        return;
    } else [a, b, c] = checked;

    // Calculate the discriminant
    var discriminant = b * b - 4 * a * c;
    var discriminantEq = `b^2 - 4ac => ${b}^2 - 4 * ${a} * ${c}`;

    // Initialize variables for the results
    var vertex = {};
    var roots = [];
    var possibleAbscissas = null;

    // Calculate the x-coordinate of the vertex
    var xVertex = -b / (2 * a);

    // Calculate the y-coordinate of the vertex
    var yVertex = a * Math.pow(xVertex, 2) + b * xVertex + c;

    // Determine whether it's a minimum or maximum
    var extremumType = a > 0 ? 'minimum' : 'maximum';

    vertex = {
        x: xVertex,
        y: yVertex,
        type: extremumType
    };

    // Check the nature of the roots
    if (discriminant > 0) {
        // Two distinct real roots
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        if (x1 === -0) x1 = 0;
        if (x2 === -0) x2 = 0;

        roots = [
            { x: x1, y: a * Math.pow(x1, 2) + b * x1 + c, type: 'real' },
            { x: x2, y: a * Math.pow(x2, 2) + b * x2 + c, type: 'real' }
        ];

        possibleAbscissas = [x1, x2];
    } else if (discriminant === 0) {
        // One real root (double root)
        var xRoot = b == 0 ? 0 : -b / (2 * a);    // prevents negative zero

        roots = [
            { x: xRoot, y: a * Math.pow(xRoot, 2) + b * xRoot + c, type: 'real' }
        ];

        possibleAbscissas = [xRoot];
    } else {
        // Complex roots
        var realPart = b == 0 ? 0 : -b / (2 * a);
        var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);

        roots = [
            { x: realPart, y: imaginaryPart, type: 'complex' },
            { x: realPart, y: -imaginaryPart, type: 'complex' }
        ];

        possibleAbscissas = "This does not touch the x-axis and the discriminant is negative, so there are no abscissas.";
    }

    return {
        xSqCoeff: a,
        xCoeff: b,
        constant: c,
        vertex: vertex,
        roots: roots,
        possibleAbscissas: possibleAbscissas,
        discriminantEq: discriminantEq,
        discriminant: discriminant
    };
}

// Example usage:
var a = -3 // coefficient of x^2
var b = 9; // coefficient of x
var c = 0; // constant term

var result = quadraticInfo(a, b, c);
if (typeof result === 'object') {
    console.log('X^2 coefficient (a):', result.xSqCoeff);
    console.log('X coefficient (b):', result.xCoeff);
    console.log('Constant (c):', result.constant);
    console.log(`Vertex at (${result.vertex.x}, ${result.vertex.y}), ${result.vertex.type}`);
    console.log('Discriminant equation:', result.discriminantEq);
    console.log('Discriminant:', result.discriminant);
    console.log('Roots:', result.roots);
    console.log('Abscissas:', result.possibleAbscissas);
}
