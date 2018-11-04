import normalizeLinkingUrl from '../normalizeLinkingUrl';

it('strips a trailing / on android', () => {
  const raw = 'exp://exp.host/@abc/123?release-channel=gucci/+';
  const normalized = 'exp://exp.host/@abc/123?release-channel=gucci+';

  expect(normalizeLinkingUrl({ linkingUri: raw }, 'android')).toBe(normalized);
});

it('adds an extra + in standalone on android unless it is already there', () => {
  expect(
    normalizeLinkingUrl(
      { linkingUri: 'exp://192.168.1.75:19000/+', appOwnership: 'standalone' },
      'android'
    )
  ).toBe('exp://192.168.1.75:19000/+');

  expect(
    normalizeLinkingUrl(
      { linkingUri: 'myscheme://', appOwnership: 'standalone' },
      'android'
    )
  ).toBe('myscheme://+');
});
