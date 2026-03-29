# GreenKart Complete Test Plan

## Application Overview

GreenKart is an e-commerce application for purchasing vegetables and fruits online with 16 products, search, quantity controls, cart management, and offers page with pagination and sorting.

## Test Scenarios

### 1. Homepage

**Seed:** `tests/seed.spec.ts`

#### 1.1. Page loads with all products

**File:** `tests/t1.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: 16 products loaded

### 2. Search

**Seed:** `tests/seed.spec.ts`

#### 2.1. Search filters products

**File:** `tests/t2.spec.ts`

**Steps:**
  1. Search for product
    - expect: Filtered results

#### 2.2. Clear search shows all

**File:** `tests/t3.spec.ts`

**Steps:**
  1. Clear search
    - expect: All products

### 3. Quantity

**Seed:** `tests/seed.spec.ts`

#### 3.1. Plus button increases qty

**File:** `tests/t4.spec.ts`

**Steps:**
  1. Click plus
    - expect: Qty increases

#### 3.2. Minus button decreases qty

**File:** `tests/t5.spec.ts`

**Steps:**
  1. Click minus
    - expect: Qty decreases

### 4. Cart

**Seed:** `tests/seed.spec.ts`

#### 4.1. Add to cart

**File:** `tests/t6.spec.ts`

**Steps:**
  1. Click ADD TO CART
    - expect: Item added

#### 4.2. View cart

**File:** `tests/t7.spec.ts`

**Steps:**
  1. Click cart link
    - expect: Cart page displays

#### 4.3. Remove from cart

**File:** `tests/t8.spec.ts`

**Steps:**
  1. Click remove button
    - expect: Item removed

#### 4.4. Empty cart message

**File:** `tests/t9.spec.ts`

**Steps:**
  1. View empty cart
    - expect: Empty message

### 5. Offers

**Seed:** `tests/seed.spec.ts`

#### 5.1. Navigate to offers

**File:** `tests/t10.spec.ts`

**Steps:**
  1. Click Top Deals
    - expect: Offers page loaded

#### 5.2. View offers table

**File:** `tests/t11.spec.ts`

**Steps:**
  1. Check table
    - expect: Table displayed

#### 5.3. Pagination works

**File:** `tests/t12.spec.ts`

**Steps:**
  1. Click page 2
    - expect: Page 2 loaded

#### 5.4. Page size selector

**File:** `tests/t13.spec.ts`

**Steps:**
  1. Select 10 items per page
    - expect: 10 items displayed

#### 5.5. Column sorting

**File:** `tests/t14.spec.ts`

**Steps:**
  1. Click column header
    - expect: Sort order changed

### 6. Navigation

**Seed:** `tests/seed.spec.ts`

#### 6.1. Top Deals link

**File:** `tests/t15.spec.ts`

**Steps:**
  1. Click Top Deals link
    - expect: Offers page loads

#### 6.2. Cart link

**File:** `tests/t16.spec.ts`

**Steps:**
  1. Click Cart link
    - expect: Cart page loads

#### 6.3. Flight Booking link

**File:** `tests/t17.spec.ts`

**Steps:**
  1. Click Flight Booking link
    - expect: External page opens
