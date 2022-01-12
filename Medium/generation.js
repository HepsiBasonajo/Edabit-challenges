/* Which Generation Are You?
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter */

function generation(x, y) {

if(x===(-3)&& y==="m")
	{		return "great grandfather";
}
	if(x===(-3)&& y==="f")
	{		return "great grandmother";
}
	if(x===(-2)&& y==="m")
	{		return "grandfather";
}
	if(x===(-2)&& y==="f")
	{		return "grandmother";
}
	if(x===(-1)&& y==="m")
	{		return "father";
}
	if(x===(-1)&& y==="f")
	{		return "mother";
}
	if(x===(0)&& y==="m")
	{		return "me!";
}
	if(x===(0)&& y==="f")
	{		return "me!";
}
	if(x===(1)&& y==="m")
	{		return "son";
}
	if(x===(1)&& y==="f")
	{		return "daughter";
}

	if(x===(2)&& y==="m")
	{		return "grandson";
}
	if(x===(2)&& y==="f")
	{		return "granddaughter";
}
	if(x===(3)&& y==="m")
	{		return "great grandson";
}
	if(x===(3)&& y==="f")
	{		return "great granddaughter";
}


}
