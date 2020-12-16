// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity = 0.6.12;

interface IBurnAuction {
    function transferBalance(address payable recipient) external;
    function register() external payable;
    function setUrl(string memory url) external;
    function clearUrl() external;
    function coordinatorUrls(address url) external view returns (string memory);
    function bid(uint roundIndex) external payable;
    function minNextBid(uint roundIndex) external view returns (uint);
    function coordinatorForRound(uint roundIndex) external view returns (address);
    function activeCoordinator() external view returns (address);
    function currentRound() external view returns (uint);
    function shouldOpenRound() external view returns (bool);
    function isRoundOpen() external view returns (bool);
}
