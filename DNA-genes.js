/*
In DNA strands, symbols "A" and "T" are complements of each other, 
as "C" and "G". Your function receives one side of the DNA; 
you need to return the other complementary side. 

DNA strand is never empty or there is no DNA at all.
*/


// Solution

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

// or

let pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}