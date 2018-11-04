// TODO: Remove this when we make Constants.linkingUrl consistent everywhere
// https://github.com/expo/universe/issues/1678
export default function normalizeLinkingUrl(constants, platform): string {
  let linkingUrl = constants.linkingUri;

  if (platform === 'ios') {
    return linkingUrl;
  }

  // Workaround for: https://github.com/expo/expo/issues/1404
  if (linkingUrl.includes('release-channel') && linkingUrl.endsWith('/+')) {
    linkingUrl = linkingUrl.replace(/\/\+$/, '+');
  }

  // Workaround for:
  // - https://github.com/expo/expo/issues/765
  // - https://github.com/expo/universe/issues/1440
  if (constants.appOwnership === 'standalone' && !linkingUrl.includes('+')) {
    return `${linkingUrl}+`;
  }

  return linkingUrl;
}

