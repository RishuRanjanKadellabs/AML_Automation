import { Locator } from "@playwright/test";
import Milestone1DedupScreeningPage from "../../../../milestone1/pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage";
import DedupScreeningLocators from "../../../objectrepositories/DedupScreeningLocators";

/**
 * Extends milestone1 Dedup Screening POM for milestone2 pipeline cases.
 * Source Excel: pipeline/test-data/Risk Assesment Test Cases.xlsx (DDS-TC rows).
 */
class DedupScreeningPage extends Milestone1DedupScreeningPage {
  get filterCard(): Locator {
    return this.page.locator(DedupScreeningLocators.filterCard).first();
  }

  async expectSearchFiltersCardVisible(): Promise<void> {
    await this.assertVisible(this.filterCard, "Search Filters card");
  }
}

export default DedupScreeningPage;
