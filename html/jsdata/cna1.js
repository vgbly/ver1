const glossary = [
	{
		word: "abscissa",
		desc: "the distance along the horizontal axis in a coordinate graph.",
	},
	{
		word: "absolute value",
		desc: "the numerical value when direction or sign is not considered. The symbol for absolute value is ∣ ∣.",
	},
	{
		word: "additive axiom of equality",
		desc: "if a = b and c = d, then a + c = b + d.",
	},
	{
		word: "additive axiom of inequality",
		desc: "if a > b, then a + c > b + c.",
	},
	{
		word: "additive inverse",
		desc: "the opposite (negative) of a number. Any number plus its additive inverse equals 0.",
	},
	{
		word: "algebra",
		desc: "arithmetic operations using letters and/or symbols in place of numbers.",
	},
	{
		word: "algebraic expressions",
		desc: "expressions composed of letters to stand for numbers.",
	},
	{
		word: "algebraic fractions",
		desc: "fractions using a variable in the numerator and/or denominator.",
	},
	{
		word: "ascending order",
		desc: "basically, when the power of a term increases for each succeeding term.",
	},
	{
		word: "associative property",
		desc: "grouping of elements does not make any difference in the outcome. Only true for multiplication and addition.",
	},
	{
		word: "axioms of equality",
		desc: "basic rules for using the equal sign.",
	},
	{
		word: "binomial",
		desc: "an algebraic expression consisting of two terms.",
	},
	{
		word: "braces",
		desc: "grouping symbols used after the use of brackets. Also used to represent a set. { }",
	},
	{
		word: "brackets",
		desc: "grouping symbols used after the use of parentheses. [ ]",
	},
	{
		word: "canceling",
		desc: "in multiplication of fractions, dividing the same number into both a numerator and a denominator.",
	},
	{
		word: "cartesian coordinates",
		desc: "a system of assigning ordered number pairs to points on a plane.",
	},
	{
		word: "closed half-plane",
		desc: "a half-plane that includes the boundary line and is graphed using a solid line and shading.",
	},
	{
		word: "closed interval",
		desc: "an interval that includes both endpoints or fixed boundaries.",
	},
	{
		word: "closure property",
		desc: "when all answers fall into the original set.",
	},
	{
		word: "coefficient",
		desc: "the number in front of a variable. For example, in 9x, 9 is the coefficient.",
	},
	{
		word: "common factors",
		desc: "factors that are the same for two or more numbers.",
	},
	{
		word: "commutative property",
		desc: "order of elements does not make any difference in the outcome. Only true for multiplication and addition.",
	},
	{
		word: "complex fraction",
		desc: "a fraction having a fraction or fractions in the numerator and/or denominator.",
	},
	{
		word: "composite number",
		desc: "a number divisible by more than just 1 and itself (such as 4, 6, 8, 9, . . . ). 0 and 1are not composite numbers.",
	},
	{
		word: "conjugate",
		desc: "the conjugate of a binomial contains the same terms, but the opposite sign between them. (x + y) and (x − y) are conjugates.",
	},
	{
		word: "coordinate axes",
		desc: "two perpendicular number lines used in a coordinate graph.",
	},
	{
		word: "coordinate graph",
		desc: "two perpendicular number lines, the x axis and the y axis, creating a plane on which each point is assigned a pair of numbers.",
	},
	{
		word: "coordinates",
		desc: "the numbers that correspond to a point on a coordinate graph.",
	},
	{
		word: "cube",
		desc: "the result when a number is multiplied by itself twice. Designated by the exponent 3 (such as x3).",
	},
	{
		word: "cube root",
		desc: "the number that when multiplied by itself twice gives you the original number. For example, 5 is the cube root of 125.",
	},
	{
		word: "denominator",
		desc: "everything below the fraction bar in a fraction.",
	},
	{
		word: "descending order",
		desc: "basically, when the power of a term decreases for each succeeding term.",
	},
	{
		word: "direct variation",
		desc: "when y varies directly as x or y is directly proportional to x.",
	},
	{
		word: "discriminant",
		desc: "the value under the radical sign in the quadratic formula. [b2 − 4ac]",
	},
	{
		word: "distributive property",
		desc: "the process of distributing the number on the outside of the parentheses to each number on the inside. a(b + c) = ab + ac",
	},
	{
		word: "domain",
		desc: "the set of all first coordinates from the ordered pairs in a relation.",
	},
	{
		word: "element",
		desc: "a member of a set.",
	},
	{
		word: "empty set",
		desc: "a set with no members (a null set).",
	},
	{
		word: "equal sets",
		desc: "sets that have exactly the same members.",
	},
	{
		word: "equation",
		desc: "a balanced relationship between numbers and/or symbols. A mathematical sentence.",
	},
	{
		word: "equivalent sets",
		desc: "sets that have the same number of members.",
	},
	{
		word: "Euler circles",
		desc: "a method of pictorially representing sets.",
	},
	{
		word: "evaluate",
		desc: "to determine the value or numerical amount.",
	},
	{
		word: "exponent",
		desc: "a numeral used to indicate the power of a number.",
	},
	{
		word: "extremes",
		desc: "outer terms.",
	},
	{
		word: "factor",
		desc: "to find two or more quantities whose product equals the original quantity.",
	},
	{
		word: "finite",
		desc: "countable. Having a definite ending.",
	},
	{
		word: "F.O.I.L. method",
		desc: "a method of multiplying binomials in which first terms, outside terms, inside terms, and last terms are multiplied.",
	},
	{
		word: "function",
		desc: "a relation in which each element in the domain is paired with exactly one element in the range.",
	},
	{
		word: "graphing method",
		desc: "a method of solving simultaneous equations by graphing each equation on a coordinate graph and finding the common point (intersection).",
	},
	{
		word: "half-open interval",
		desc: "an interval that includes one endpoint, or one boundary.",
	},
	{
		word: "half-plane",
		desc: "the region of a coordinate graph on one side of a boundary line.",
	},
	{
		word: "identity element for addition",
		desc: "0. Any number added to 0 gives the original number.",
	},
	{
		word: "identity element for multiplication",
		desc: "1. Any number multiplied by 1 gives the original number.",
	},
	{
		word: "imaginary numbers",
		desc: "square roots of negative numbers. The imaginary unit is i.",
	},
	{
		word: "incomplete quadratic equation",
		desc: "a quadratic equation with a term missing.",
	},
	{
		word: "indirect variation or inverse variation",
		desc: "when y varies indirectly as x or y is indirectly proportional to x. That is, as x increases, y decreases and as y increases, x decreases. Also referred to as inverse or indirect proportion.",
	},
	{
		word: "inequality",
		desc: "a statement in which the relationships are not equal. The opposite of an equation.",
	},
	{
		word: "infinite",
		desc: "uncountable. Continues forever.",
	},
	{
		word: "integer",
		desc: "a whole number, either positive, negative, or zero.",
	},
	{
		word: "intersection of sets",
		desc: "the members that overlap (are in both sets).",
	},
	{
		word: "interval",
		desc: "all the numbers that lie within two certain boundaries.",
	},
	{
		word: "inverse relations",
		desc: "relations where the domain and the range have been interchanged—switching the coordinates in each ordered pair.",
	},
	{
		word: "linear equation",
		desc: "an equation whose solution set forms a straight line when plotted on a coordinate graph.",
	},
	{
		word: "literal equation",
		desc: "an equation having mostly variables.",
	},
	{
		word: "means",
		desc: "inner terms.",
	},
	{
		word: "monomial",
		desc: "an algebraic expression consisting of only one term.",
	},
	{
		word: "multiplicative axiom of equality",
		desc: "if a = b and c = d, then ac = bd.",
	},
	{
		word: "multiplicative inverse",
		desc: "the reciprocal of the number. Any number multiplied by its multiplicative inverse equals 1.",
	},
	{
		word: "negative multiplication property of inequality",
		desc: "reverse the inequality sign when multiplying (or dividing) by a negative number. If c < 0, then a > b if, and only if, ac < bc.",
	},
	{
		word: "nonlinear equation",
		desc: "an equation whose solution set does not form a straight line when plotted on a coordinate graph.",
	},
	{
		word: "null set",
		desc: "a set with no members (an empty set).",
	},
	{
		word: "number line",
		desc: "a graphic representation of integers and real numbers. The point on this line associated with each number is called the graph of the number.",
	},
	{
		word: "numerator",
		desc: "everything above the fraction bar in a fraction.",
	},
	{
		word: "numerical coefficient",
		desc: "the number in front of the variable.",
	},
	{
		word: "open half-plane",
		desc: "a half-plane that does not include the boundary line. If the inequality is a \">\" or \"<\", then the graph is an open half-plane.",
	},
	{
		word: "open interval",
		desc: "an interval that does not include endpoints or fixed boundaries.",
	},
	{
		word: "open ray",
		desc: "a ray that does include its endpoint (half line).",
	},
	{
		word: "ordered pair",
		desc: "any pair of elements (x, y) having a first element x and a second element y. Used to identify or plot points on a coordinate grid.",
	},
	{
		word: "ordinate",
		desc: "the distance along the vertical axis on a coordinate graph.",
	},
	{
		word: "origin",
		desc: "the point of intersection of the two number lines on a coordinate graph. Represented by the coordinates (0,0).",
	},
	{
		word: "polynomial",
		desc: "an algebraic expression consisting of two or more terms.",
	},
	{
		word: "positive multiplication property of inequality",
		desc: "if c > 0, then a > b if, and only if, ac > bc.",
	},
	{
		word: "proportion",
		desc: "two ratios equal to each other. For example, a is to c as b is to d.",
	},
	{
		word: "quadrants",
		desc: "four quarters or divisions of a coordinate graph.",
	},
	{
		word: "quadratic equation",
		desc: "an equation that could be written Ax2 + Bx + C = 0.",
	},
	{
		word: "quadratic formula",
		desc: "a method of solving quadratic equations using the formula",
	},
	{
		word: "radical sign",
		desc: "the symbol used to designate square root.",
	},
	{
		word: "range",
		desc: "the set of all second (or y) coordinates from the ordered pairs in a relation.",
	},
	{
		word: "ratio",
		desc: "a method of comparing two or more numbers. For example, a:b. Often written as a fraction, a/b.",
	},
	{
		word: "real numbers",
		desc: "the set consisting of all rational and irrational numbers.",
	},
	{
		word: "reducing",
		desc: "changing a numerical or algebraic fraction into its lowest terms. For example, 2/4 is reduced to 1/2, or a/ab is reduced to 1/b.",
	},
	{
		word: "reflexive axiom of equality",
		desc: "for any number a, a = a.",
	},
	{
		word: "relation",
		desc: "any set of ordered pairs.",
	},
	{
		word: "repeating decimal",
		desc: "a decimal fraction that continues forever repeating a number or block of numbers.",
	},
	{
		word: "roster",
		desc: "a method of naming a set by listing its members.",
	},
	{
		word: "rule",
		desc: "a method of naming a set by describing its elements.",
	},
	{
		word: "set",
		desc: "a group of objects, numbers, and so forth.",
	},
	{
		word: "set builder notation",
		desc: "a formal method of describing a set. Often used for inequalities. For example, {x: x > 1}, which is read \"x such that all x is greater than 1.\"",
	},
	{
		word: "simplify",
		desc: "to combine several or many terms into fewer terms.",
	},
	{
		word: "simultaneous equations (system of equations)",
		desc: "a set of equations with the same unknowns (variables).",
	},
	{
		word: "slope of a line",
		desc: "the ratio of the change in y to the change in x in a linear equation (slope = rise/run).",
	},
	{
		word: "solution set (or solution)",
		desc: "all the answers that satisfy the equation.",
	},
	{
		word: "square",
		desc: "the result when a number is multiplied by itself. Designated by the exponent 2 (such as x2).",
	},
	{
		word: "square root",
		desc: "the number that when multiplied by itself gives you the original number. For example, 5 is the square root of 25.",
	},
	{
		word: "subset",
		desc: "a set within a set.",
	},
	{
		word: "substitution method",
		desc: "a method of solving simultaneous equations that involves substituting one equation into another.",
	},
	{
		word: "symmetric axiom of equality",
		desc: "if a = b, then b = a.",
	},
	{
		word: "system of equations",
		desc: "simultaneous equations.",
	},
	{
		word: "term",
		desc: "a numerical or literal expression with its own sign.",
	},
	{
		word: "transitive axiom of equality",
		desc: "if a = b and b = c, then a = c.",
	},
	{
		word: "transitive axiom of inequality",
		desc: "if a > b and b > c, then a > c. Or if a < b and b < c, then a < c.",
	},
	{
		word: "trichotomy axiom of inequality",
		desc: "the only possible relationships between two numbers are - a > b, a = b, or a < b.",
	},
	{
		word: "trinomial",
		desc: "an algebraic expression consisting of three terms.",
	},
	{
		word: "union of sets",
		desc: "all the numbers in those sets.",
	},
	{
		word: "universal set",
		desc: "the general category set, or the set of all those elements under consideration.",
	},
	{
		word: "unknown",
		desc: "a letter or symbol whose value is not known.",
	},
	{
		word: "value",
		desc: "numerical amount.",
	},
	{
		word: "variable",
		desc: "a symbol used to stand for a number.",
	},
	{
		word: "variation",
		desc: "a relationship between a set of values of one variable and a set of values of other variables.",
	},
	{
		word: "Venn diagram",
		desc: "a pictorial description of sets.",
	},
	{
		word: "vinculum",
		desc: "a line placed over (sometimes under) a digit or group of digits in a repeating decimal fraction to show which digits are repeating.",
	},
	{
		word: "whole number",
		desc: "0, 1, 2, 3, and so on.",
	},
	{
		word: "x-axis",
		desc: "the horizontal axis in a coordinate graph.",
	},
	{
		word: "x-coordinate",
		desc: "the first number in the ordered pair. Refers to the distance on the x-axis (the abscissa).",
	},
	{
		word: "y-axis",
		desc: "the vertical axis in a coordinate graph.",
	},
	{
		word: "y-coordinate",
		desc: "the second number in the ordered pair. Refers to the distance on the y-axis (the ordinate).",
	}
];