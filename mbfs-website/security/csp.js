const uuid = require(`uuid`)


function getDirectives() {
    const self = `'self'`
    const unsafeInline = `'unsafe-inline'`
    const unsafeEval = `'unsafe-eval'`
    const scripts = [
        `https://www.google-analytics.com/`,
        `https://maps.googleapis.com/`
    ]
    const styles = [
        `https://fonts.googleapis.com/`
    ]
    const fonts = [
        `https://fonts.gstatic.com/`
    ]
    const frames = [
        `https://www.youtube.com/`,
        `https://player.vimeo.com/`
    ]
    const images = [
        `https:`,
        `data:`
    ]
    const connect = [
        `https://api.github.com/`,
        `https://maps.googleapis.com/`
    ]

    return {
        defaultSrc: [self],
        scriptSrc: [self, ...scripts],
        styleSrc: [self, unsafeInline, unsafeEval, ...styles],
        fontSrc: [self, ...fonts],
        frameSrc: [self, ...frames],
        connectSrc: [self, ...connect],
        imgSrc: [self, ...images],
        objectSrc: [self],

        // breaks pdf in chrome:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=413851
        // sandbox: [`allow-forms`, `allow-scripts`, `allow-same-origin`],

        //upgradeInsecureRequests: authorityIsSecure,
        reportUri: `/api/csp/report`
    }
}
const csp = {
    directives: getDirectives(),

}

module.exports = csp;