export const subtleHighlightColor = "#333";
export const highlightColor = "#666";
export const shadowColor = "#000";
export const textColor = "#fff";
export const bannerTextColor = "#fff";
export const bannerTextBackgroundColor = "#000";

export function shadow(num) {
  return {
    shadowColor: shadowColor,
    shadowOpacity: 0.8,
    shadowRadius: num,
    shadowOffset: {
      height: num,
      width: 0
    },
    elevation: num
  }
}