export const validateRestaurantData = (req, res, next) => {
  const { name, phone, address, cuisine, image } = req.body;

  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push("Name is required and should be at least 2 characters long");
  }

  if (!image || !image.match(/^https?:\/\/.+/)) {
    errors.push("Valid image URL is required");
  }

  if (!phone || !phone.match(/^\+?[\d\s-]+$/)) {
    errors.push("Valid phone number is required");
  }

  if (!cuisine || cuisine.trim().length < 2) {
    errors.push(
      "Cuisine type is required and should be at least 2 characters long"
    );
  }

  if (
    !address ||
    !address.street ||
    !address.city ||
    !address.state ||
    !address.zipCode ||
    !address.country
  ) {
    errors.push(
      "Complete address is required (street, city, state, zipCode, country)"
    );
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};
