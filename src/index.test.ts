import { GiphyGif } from '.';

describe('GiphyGif', () => {
  const expectedUrl = 'https://i.giphy.com/media/olAik8MhYOB9K/giphy.gif';
  const expectedUrl2 = 'https://i.giphy.com/media/3NtY188QaxDdC/giphy.gif';

  describe('GiphyGif.getDirectLink', () => {
    it('should throw an error when incorrect url', () => {
      expect(() =>
        GiphyGif.getDirectLink(
          'https://www.google.com/search?q=what+year+is+it'
        )
      ).toThrow(URIError);
    });

    it('should return a correct result for a gif from page', () => {
      const result = GiphyGif.getDirectLink(
        'https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K'
      );

      expect(result).toBe(expectedUrl);
    });

    it('should return a correct result for a gif from page with file extension', () => {
      const result = GiphyGif.getDirectLink(
        'https://giphy.com/gifs/life-gets-down-olAik8MhYOB9K/giphy.gif'
      );

      expect(result).toBe(expectedUrl);
    });

    it('should return a correct result for a gif from page with no dashes in url', () => {
      const result = GiphyGif.getDirectLink(
        'https://giphy.com/gifs/3NtY188QaxDdC'
      );

      expect(result).toBe(expectedUrl2);
    });

    it('should return a correct result for an url for embedding', () => {
      const result = GiphyGif.getDirectLink(
        'https://giphy.com/embed/olAik8MhYOB9K'
      );

      expect(result).toBe(expectedUrl);
    });

    it('should return a correct result for a media url', () => {
      const result = GiphyGif.getDirectLink(
        'https://media4.giphy.com/media/olAik8MhYOB9K/giphy.gif'
      );

      expect(result).toBe(expectedUrl);
    });
  });

  describe('GiphyGif.isGiphyDirectImage', () => {
    it('should return true for a Giphy image', () => {
      expect(GiphyGif.isGiphyDirectImage(expectedUrl)).toBe(true);
    });

    it('should return false for a non Giphy image', () => {
      expect(
        GiphyGif.isGiphyDirectImage('https://google.com/?q=whatever/giphy.gif')
      ).toBe(false);
    });
  });
});
