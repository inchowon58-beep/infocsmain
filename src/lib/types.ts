export type SiteStatus = "available" | "rented" | "hidden";

export type RentalSite = {
  id: string;
  name: string;
  url: string;
  industry: string;
  monthlyRent: number;
  setupCost: number;
  previewImage: string;
  description: string;
  status: SiteStatus;
  sortOrder: number;
  createdAt: string;
};

export type Inquiry = {
  id: string;
  name: string;
  phone: string;
  industry: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
};
