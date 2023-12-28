import axios from "axios";

describe("Who we are footer", () => {
  beforeEach(async () => {});

  it("check short company presentation ", async () => {
    const url: string = "https://sii.pl/en/short-company-presentation/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(
      `"We’re an expert on digitalization, user experience, software development, cybersecurity`
    );
  });

  it("check Sii Poland Soul ", async () => {
    const url: string =
      "https://sii.pl/en/sii-poland-soul-mission-objectives-and-values/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(
      `Sii Poland Soul: Mission, Objectives and Value`
    );
  });

  it("check key figures ", async () => {
    const url: string = "https://sii.pl/en/profile-and-key-figures/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(
      `Our KPIs are the proof of our strength & credibility`
    );
  });

  it("check company structure", async () => {
    const url: string = "https://sii.pl/en/our-mature-organization-processes/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(
      `Effective organizational structure & mature processes are one of our key strengths`
    );
  });

  it("check company structure", async () => {
    const url: string = "https://sii.pl/en/certificates-and-awards/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(`Certificates and Awards`);
  });

  it("check certificates and awards", async () => {
    const url: string = "https://sii.pl/en/certificates-and-awards/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(`Certificates and Awards`);
  });

  it("check corporate social responsibility", async () => {
    const url: string =
      "https://sii.pl/en/passion-sponsorship-and-power-volunteers/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(
      `Each year, we sponsor our workers' passions and interests`
    );
  });

  it("check history", async () => {
    const url: string = "https://sii.pl/en/history/";

    const axiosResponse = await axios.get(url);
    await expect(axiosResponse.status).toEqual(200);
    await expect(axiosResponse.data).toContain(
      `In 2016 we celebrated our 10th anniversary. To mark this milestone, we released a video showing our road to success. Watch it to learn more about our story.`
    );
  });
});
