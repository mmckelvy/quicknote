function computeTrigramSimilarity(text1, text2) {
  const trigrams1 = generateTrigrams(text1);
  const trigrams2 = generateTrigrams(text2);

  // Compute the intersection of trigrams
  const intersection = new Set([...trigrams1].filter(x => trigrams2.has(x)));

  // Calculate the similarity score
  const similarityScore = intersection.size /
    (trigrams1.size + trigrams2.size - intersection.size);

  return similarityScore;
}
