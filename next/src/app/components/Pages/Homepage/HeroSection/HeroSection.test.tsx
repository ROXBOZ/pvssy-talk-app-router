jest.mock("../../../../../../config/sanity", () => ({
  __esModule: true,
  urlFor: () => ({ url: () => "/mocked-image-url.jpg" }),
}));

jest.mock("@sanity/image-url", () => () => ({
  url: () => "/mocked-image-url.jpg",
}));
