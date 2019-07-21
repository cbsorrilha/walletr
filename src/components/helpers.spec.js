import { media, margin, border, padding } from './helpers';

describe("Test the component helpers", () => {
  describe("Test  the media helper", () => {
    it('should match the snapshots', () => {
      expect(media).toMatchSnapshot();
    });
  });

  describe("Test the margin styled-components helper", () => {
    it('should return nothing if no margin is passed', () => {
      const noMargin = margin({});
      expect(noMargin).toBe('');
    });

    it('should return a string containing the declared string margin', () => {
      const stringMargin = margin({ margin: "10px" });
      expect(stringMargin.join("")).toEqual(expect.stringContaining('margin: 10px;'));
    });

    it('should return a string containing the declared object margin', () => {
      const objectMargin = margin({ margin: { top: "10px" } });
      expect(objectMargin.join("")).toEqual(expect.stringContaining('margin-top: 10px;'));
    });

    it('should return a string containing the two declared margins in the object', () => {
      const multipleObjectMargin = margin({ margin: { top: "10px", left: "15px" } });

      expect(multipleObjectMargin.join("")).toEqual(expect.stringContaining('margin-top: 10px;'));
      expect(multipleObjectMargin.join("")).toEqual(expect.stringContaining('margin-left: 15px;'));
    });
  });

  describe("Test the padding styled-components helper", () => {
    it('should return nothing if no padding is passed', () => {
      const noPadding = padding({});
      expect(noPadding).toBe('');
    });

    it('should return a string containing the declared string padding', () => {
      const stringPadding = padding({ padding: "10px" });
      expect(stringPadding.join("")).toEqual(expect.stringContaining('padding: 10px;'));
    });

    it('should return a string containing the declared object padding', () => {
      const objectPadding = padding({ padding: { top: "10px" } });
      expect(objectPadding.join("")).toEqual(expect.stringContaining('padding-top: 10px;'));
    });

    it('should return a string containing the two declared paddings in the object', () => {
      const multipleObjectPadding = padding({ padding: { top: "10px", left: "15px" } });

      expect(multipleObjectPadding.join("")).toEqual(expect.stringContaining('padding-top: 10px;'));
      expect(multipleObjectPadding.join("")).toEqual(expect.stringContaining('padding-left: 15px;'));
    });
  });

  describe("Test the border styled-components helper", () => {
    it('should return nothing if no border is passed', () => {
      const noBorder = border({});
      expect(noBorder).toBe('');
    });

    it('should return a string containing the declared string border', () => {
      const stringBorder = border({ border: "10px" });
      expect(stringBorder.join("")).toEqual(expect.stringContaining('border: 10px;'));
    });

    it('should return a string containing the declared object border', () => {
      const objectBorder = border({ border: { top: "10px" } });
      expect(objectBorder.join("")).toEqual(expect.stringContaining('border-top: 10px;'));
    });

    it('should return a string containing the two declared borders in the object', () => {
      const multipleObjectBorder = border({ border: { top: "10px", left: "15px" } });

      expect(multipleObjectBorder.join("")).toEqual(expect.stringContaining('border-top: 10px;'));
      expect(multipleObjectBorder.join("")).toEqual(expect.stringContaining('border-left: 15px;'));
    });
  });


});