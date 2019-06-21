export const breakpoints = {
    ExtraLarge: 1200, 
    large: 992,
    medium: 768,
    small: 576
}



export const smallerThan = width => `@media screen and (max-width: ${width}px)`
export const smallerHeight = height => `@media screen and (max-height: ${height}px)`
export const widerThan = width => `@media screen and (min-width: ${width}px)`

// export const isHorizontal = smallerThan(769)