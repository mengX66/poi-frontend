export const avatarColorMapping = (score) => {
    switch (true) {
      case (score >= 9):
        return '#2e7d32'
      case (score >= 7 && score < 9):
        return '#7cb342'
      case (score >= 5 && score < 7):
        return '#cddc39'
      default:
        return '#bdbdbd'
    }
  }